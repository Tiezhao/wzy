import './TableCard.less';

const tableColor = {
  free: 'gray',
  using: 'blue',
  error: 'red',
  default: 'lightslategray',
};

const getColorByStatus = (status) => tableColor[status] || tableColor.default;

export default function TableCard({ name, status }) {
  return (
    <div
      className="cpnt-table-card"
      style={{ borderColor: getColorByStatus(status) }}
    >
      {name}
    </div>
  );
}
