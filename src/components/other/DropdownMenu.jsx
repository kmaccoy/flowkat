import React, { Component, useState, useRef, useEffect } from 'react';

// Drop down menu for the Prometheus metrics
const DropdownMenu = (props) => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);
    
  useEffect(() => {
    const pageClickEvent = (e) => {
      if (dropdownRef.current !== null && !dropdownRef.current.contains(e.target)) {
        setIsActive(!isActive);
      }
    };
      
    // If the item is active (ie open) then listen for clicks
    if (isActive) {
      window.addEventListener('click', pageClickEvent);
    }
      
    return () => {
      window.removeEventListener('click', pageClickEvent);
    }
  }, [isActive]);

  return (
    <div className="menu-container">
      <button onClick={onClick} className="menu-trigger">
        <span>Query</span>
        <img className="icon" src="https://cdn.discordapp.com/attachments/879428128282407013/890629847007760424/unknown.png" alt="User avatar" />
      </button>
      <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
        <ul>
          <li><button onClick={props.onClickQuery} className="menu-trigger" value={`kafka_cluster_partition_underreplicated`}>kafka_cluster_partition_underreplicated</button></li>
          <li><button onClick={props.onClickQuery} className="menu-trigger" value={`kafka_controller_controllerstats_topicchangerateandtimems`}>kafka_controller_controllerstats_topicchangerateandtimems</button></li>
          <li><button onClick={props.onClickQuery} className="menu-trigger" value={`kafka_controller_controllerstats_topicchangerateandtimems_count`}>kafka_controller_controllerstats_topicchangerateandtimems_count</button></li>
          <li><button onClick={props.onClickQuery} className="menu-trigger" value={`kafka_controller_kafkacontroller_globalpartitioncount`}>kafka_controller_kafkacontroller_globalpartitioncount</button></li>
          <li><button onClick={props.onClickQuery} className="menu-trigger" value={`kafka_controller_kafkacontroller_globaltopiccount`}>kafka_controller_kafkacontroller_globaltopiccount</button></li>
          <li><button onClick={props.onClickQuery} className="menu-trigger" value={`kafka_controller_kafkacontroller_offlinepartitionscount`}>kafka_controller_kafkacontroller_offlinepartitionscount</button></li>
          <li><button onClick={props.onClickQuery} className="menu-trigger" value={`kafka_server_brokertopicmetrics_bytesin_total`}>kafka_server_brokertopicmetrics_bytesin_total</button></li>
          <li><button onClick={props.onClickQuery} className="menu-trigger" value={`kafka_server_brokertopicmetrics_messagesin_total`}>kafka_server_brokertopicmetrics_messagesin_total</button></li>
          <li><button onClick={props.onClickQuery} className="menu-trigger" value={`kafka_server_brokertopicmetrics_totalproducerequests_total`}>kafka_server_brokertopicmetrics_totalproducerequests_total</button></li>
          <li><button onClick={props.onClickQuery} className="menu-trigger" value={`kafka_cluster_partition_underreplicated`}>kafka_cluster_partition_underreplicated</button></li>
        </ul>
      </nav>
    </div>
  );
};
 
export default DropdownMenu;
