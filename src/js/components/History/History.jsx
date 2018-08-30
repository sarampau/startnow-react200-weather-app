import React from 'react';

export default class History extends React.Component {
  render() {
    const { listItems } = this.props;
    return (
      <div className='card border-info'>
        <div className='card-header text-info'>Search History</div>
        <div className='card-body'>
          <table className='table table-striped'>
            <tbody>
              {
                listItems.map(listItem => {
                  return <tr key ={listItem.time.toString()}>
                    <td>{listItem.name}</td>
                    <td>
                      <p className='mb-0'>{listItem.time.toLocaleDateString()}</p>
                      <p className='mb-0'>{listItem.time.toLocaleTimeString()}</p>
                    </td>
                  </tr>
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
