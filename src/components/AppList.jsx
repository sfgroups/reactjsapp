import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';


function AppList() {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Application ID</th>
          <th>Application Name</th>
          <th>Check 1
          <img src="https://about.gitlab.com/images/press/press-kit-icon.svg" width={30} height={30} alt="GitLab"/>

          </th>
          <th>Check 2</th>
          <th>Check 3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>1001</td>
          <td>Application 1</td>
          <td>
          <Alert key="primary" variant="primary">
            Moderate
        </Alert>
          </td>
          <td>
          <Alert key="success" variant="success">
            Ready
        </Alert>
          </td>
          <td>
          <Alert key="warning" variant="warning">
            Trending Up
        </Alert>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>1002</td>
          <td>Application 2</td>
          <td>
          <Alert key="primary" variant="primary">
            Moderate
        </Alert>
          </td>
          <td>
          <Alert key="info" variant="info">
            Good
        </Alert>
          </td>
          <td>
          <Alert key="danger" variant="danger">
            Needs works
        </Alert>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>1003</td>
          <td>Application 3</td>
          <td>
          <Alert key="dark" variant="dark">
            No Data
        </Alert>
          </td>
          <td>
          <Alert key="success" variant="success">
            Ready
        </Alert>
          </td>
          <td>
          <Alert key="warning" variant="warning">
            Little work
        </Alert>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default AppList;