
import { Col, Row} from 'antd';
import 'antd/dist/antd.css';
import { Cdate } from "./date";
import { Ddate } from "./duedate";
import { Clientdetail } from "./clientdetail";
import { Billcompany } from "./billcompany";
import { TableData } from './body';
export const Page = () => {


  return (<>
  
    <div class="container text-centre" style={{ padding: 20 }}>
      <h1 style={{ textAlign: "center" }}>INVOICE</h1>
      <Row gutter={24} style={{ marginTop: 32 }}>
        <Col span={8}>
          <div>Client Details:<Clientdetail/></div>
        </Col>
        <Col span={8} offset={8}>
          <table className="table table-success table-striped" >
            <tr>     
              <th>Invoice Date :</th>
              <td><Cdate /></td>
            </tr>
            <tr>
              <th>Due Date :</th>
              <td><Ddate /></td>
            </tr>
          </table>
        </Col>
      </Row>

      <Row style={{ marginTop: 48 }}>
        <div>Bill To:<Billcompany /></div>
      </Row>

      <TableData  />
      
    </div >
    </>

  );
};