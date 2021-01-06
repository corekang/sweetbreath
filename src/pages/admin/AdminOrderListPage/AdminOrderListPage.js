import React, { useState, useEffect } from "react";
import { OrderList } from "./OrderList";
import { H1 } from "../../../constants/style";
import {
  NoOrder,
  OrdersListWrapper,
  OrderStatusButtons,
  OrdersContainer,
  OrderTableHeader,
  StatusButton,
} from "./style";
import { getOrders, editOrder } from "../../../webAPI/orderAPI";

export default function AdminOrderListPage() {
  const [orders, setOrders] = useState([]);
  const [selected, setSelected] = useState("all");

  useEffect(() => {
    getOrders().then((res) => {
      setOrders(res.data.reverse());
    });
  }, [setOrders]);

  const handleEditOrder = (editData) => {
    // 改資料庫
    editOrder(editData).then((res) => {
      if (res.ok === 0) {
        return alert(res.message);
      }
    });
  };

  // 篩選 Orders
  const handleChangeFilter = (value) => {
    setSelected(value);

    getOrders().then((res) => {
      const allOrders = res.data.reverse();
      const filterOrders = allOrders.filter((order) => {
        if (value === "all") return order;
        if (value === "active") return !order.is_done && !order.is_cancel;
        if (value === "done") return order.is_done;
        if (value === "cancel") return order.is_cancel;
      });
      setOrders(filterOrders);
    });
  };

  return (
    <OrdersListWrapper>
      <H1>訂單管理</H1>
      <OrderStatusButtons>
        <StatusButton
          onClick={() => handleChangeFilter("all")}
          selected={selected === "all"}
        >
          所有訂單
        </StatusButton>
        <StatusButton
          onClick={() => handleChangeFilter("active")}
          selected={selected === "active"}
        >
          處理中
        </StatusButton>
        <StatusButton
          onClick={() => handleChangeFilter("done")}
          selected={selected === "done"}
        >
          已完成
        </StatusButton>
        <StatusButton
          onClick={() => handleChangeFilter("cancel")}
          selected={selected === "cancel"}
        >
          已取消
        </StatusButton>
      </OrderStatusButtons>
      <OrdersContainer>
        <OrderTableHeader>
          <div>訂單號碼</div>
          <div>訂單日期</div>
          <div>訂單狀態</div>
          <div>合計</div>
          <div>操作</div>
        </OrderTableHeader>
        {!orders ? (
          <NoOrder>查無訂單</NoOrder>
        ) : (
          orders.map((order) => (
            <OrderList
              key={order.id}
              order={order}
              orders={orders}
              setOrders={setOrders}
              handleEditOrder={handleEditOrder}
            />
          ))
        )}
      </OrdersContainer>
    </OrdersListWrapper>
  );
}
