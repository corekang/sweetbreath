import {
  TabOrderGroup,
  TabOrderItem,
  TabOrderTop,
  TabOrderCenter,
  TabOrderProductTitle,
  TabOrderProduct,
  TabOrderProductImg,
  TabOrderProductTotal,
  TabOrderBottom,
  OrderStatus,
  IsDoneLabel,
  IsPaidLabel,
  IsSentLabel,
} from "./style";
import { Link } from "react-router-dom";

export default function TabOrder({ order, orderItems }) {
  const options = {
    // day: "numeric", // (e.g., 1)
    // month: "short", // (e.g., Oct)
    // year: "numeric", // (e.g., 2019)
    hour: "2-digit", // (e.g., 02)
    minute: "2-digit", // (e.g., 02)
    hour12: true, // 24 小時制
    timeZone: "Asia/Taipei", // "America/New_York"
  };
  return (
    <TabOrderGroup>
      <TabOrderItem>
        <TabOrderTop>
          訂單日期｜
          {new Date(order.createdAt).toLocaleDateString("zh-TW", options)}
          <br />
          訂單號碼｜{order.order_number}
          <br />
          <OrderStatus>
            訂單狀態｜
            <IsDoneLabel isCancel={order.is_cancel} isDone={order.is_done}>
              {(order.is_cancel && "已取消") ||
                (order.is_done ? "已完成" : "未完成")}
            </IsDoneLabel>
            <IsPaidLabel isPaid={order.is_paid}>
              {order.is_paid ? "已付款" : "未付款"}
            </IsPaidLabel>
            <IsSentLabel isSent={order.is_sent}>
              {order.is_sent ? "已出貨" : "未出貨"}
            </IsSentLabel>
          </OrderStatus>
        </TabOrderTop>
        <TabOrderCenter>
          <TabOrderProductTitle>訂單內容｜</TabOrderProductTitle>
          {orderItems.map((orderItems) => (
            <TabOrderProduct
              orderItems={orderItems}
              key={orderItems.product_id}
              id="orderProduct"
            >
              <TabOrderProductImg>
                <Link to={"/product/" + orderItems.product_id} target="_blank">
                  <img
                    src={orderItems.product_image}
                    alt={orderItems.product_name}
                  />
                </Link>
              </TabOrderProductImg>
              <b>
                <Link to={"/product/" + orderItems.product_id} target="_blank">
                  {orderItems.product_name}
                  {orderItems.product_feature}
                </Link>
              </b>
              &emsp; NT$ {orderItems.product_price}*
              {orderItems.product_quantity}=
              {orderItems.product_price * orderItems.product_quantity}
            </TabOrderProduct>
          ))}
          <TabOrderProductTotal id="totalPrize">
            訂單金額｜<b>NT$ {order.total}</b>
          </TabOrderProductTotal>
        </TabOrderCenter>
        <TabOrderBottom>
          收件姓名｜{order.buyer_fullname}
          <br />
          收件電話｜{order.buyer_phone}
          <br />
          收件地址｜{order.postal_code}
          {order.buyer_address}
        </TabOrderBottom>
      </TabOrderItem>
    </TabOrderGroup>
  );
}
