const someArray = [1, 2, 3];

const Table = () => (
  <table>
    <tr>
      <th>序號</th>
      <th>訂單編號</th>
      <th>訂購時間</th>
      <th>訂單金額</th>
      <th>訂購內容</th>
      <th>處理狀態</th>
    </tr>
    {Object.values(someArray).map((value, index) => {
      return (
        <tr key={index}>
          <td>{value}</td>
          <td>{value}</td>
          <td>{value}</td>
          <td>{value}</td>
          <td>{value}</td>
          <td>{value}</td>
        </tr>
      );
    })}
  </table>
);

export default Table;
