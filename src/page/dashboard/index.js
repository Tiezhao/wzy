import { Tabs } from 'antd';
import TableCard from './component/TableCard';

import './style.less';

const { TabPane } = Tabs;

export default function Dashboard() {
  const tempArr = new Array(24);
  tempArr.fill(0);
  const data = tempArr.map((value, index, array) => {
    return { name: `餐桌${index}`, status: index % 2 === 0 ? 'free' : 'using' };
  });
  data[0].status = 'error';

  return (
    <div className="dashboard-wrap">
      <Tabs defaultActiveKey="1">
        <TabPane tab="Tab 1" key="1">
          Tab 1
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Tab 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Tab 3
        </TabPane>
      </Tabs>

      {data.map((v) => (
        <TableCard {...v} />
      ))}
    </div>
  );
}
