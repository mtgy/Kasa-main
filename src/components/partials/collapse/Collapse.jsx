
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './collapse.scss';

function Collapse({ CollapseTitle, CollapseContent }) {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen (o => !o)

  return (
    <div className={`collapse`}>
      <button onClick={toggle}>
        <h3>{CollapseTitle}</h3>
        <FontAwesomeIcon icon={open ? faChevronDown : faChevronUp} />
      </button>

      
      <p className={open ? "open" : ""}>{CollapseContent}</p>
    </div>
  );
}

export default Collapse;
