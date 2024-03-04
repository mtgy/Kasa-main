import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './collapse.scss';

function Collapse({ CollapseTitle, CollapseContent }) {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((o) => !o);

  return (
    <div className={`collapse`}>
      <button onClick={toggle}>
        <h3>{CollapseTitle}</h3>
        <FontAwesomeIcon icon={open ? faChevronDown : faChevronUp} />
      </button>

      {Array.isArray(CollapseContent) ? (
        <ul className={`collapse-content ${open ? 'open' : ''}`}>
          {CollapseContent.map((content, index) => (
            <li key={index}>{content}</li>
          ))}
        </ul>
      ) : (
        <p className={`collapse-content ${open ? 'open' : ''}`}>{CollapseContent}</p>
      )}
    </div>
  );
}

export default Collapse;
