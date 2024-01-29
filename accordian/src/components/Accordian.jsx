import React, { useState } from 'react';
import Data from './Data';

const Accordion = () => {
    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    const handleClick = (currentID) => {
        // Toggle selection for single item
        setSelected(selected === currentID ? null : currentID);
        
    }

    const handleMultiSelect = (currentID) => {
        // Handle multi-selection logic
        setMultiple(prev => {
            if (prev.includes(currentID)) {
                // If already selected, remove it
                return prev.filter(item => item !== currentID);
            } else {
                // If not selected, add it
                return [...prev, currentID];
            }
        });
    }

    const handleToggleMultiSelection = () => {
        // Toggle the multi-selection state
        setEnableMultiSelection(!enableMultiSelection);
        // Clear the multiple selection array when turning off multi-selection
        if (!enableMultiSelection) {
            setMultiple([]);
        }
    }

    return (
        <div className='wrapper'>
            <div>
                <button onClick={handleToggleMultiSelection}>
                    {/* Toggle button to enable/disable multi-selection */}
                    {enableMultiSelection ? 'Disable Multi selection' : 'Enable Multi selection'}
                </button>
            </div>
            <div className='accordion'>
                {Data && Data.length > 0 ? (
                    Data.map((dataItem) => (
                        <div className='item' key={dataItem.id}>
                            <div className='title' onClick={enableMultiSelection ? () => handleMultiSelect(dataItem.id) : () => handleClick(dataItem.id)}>
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div>
                            {(selected === dataItem.id || multiple.includes(dataItem.id)) &&
                                // Show answer if item is selected (single or multi)
                                <div>{dataItem.answer}</div>
                            }
                        </div>
                    ))
                ) : (
                    <div>
                        <h2>Data is not Found</h2>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Accordion;




// import React, { useState } from 'react';
// import Data from './Data';

// const Accordian = () => {
//     const [selected, setSelected] = useState(null);
//     const [enableMultiSelection,setenableMuiltiSelection]=useState(false);
//     const[multiple,setmultiple]=useState([]);
//     const handleClick=(currentID)=>{
//         setSelected(selected===currentID ? null:currentID);
    
//     }
//     const handleMultiselect=(currentID)=>{
//    const copyMultiple=[...multiple];
//    const indexOfCurrentID=copyMultiple.indexOf(currentID);
//    console.log(indexOfCurrentID);
//    if(indexOfCurrentID==-1){
//     copyMultiple.push(currentID);
//    }
//    else{
//     copyMultiple.splice(indexOfCurrentID,1);
//    }
//    setmultiple(copyMultiple)
//     }
//     return (
//         <div className='wrapper'>
//             <div><button onClick={setenableMuiltiSelection(!enableMultiSelection)}>Enable Multi selection</button></div>
//             <div className='accordion'>
//                 {Data && Data.length > 0 ? (
//                     Data.map((dataItem) => (
//                         <div className='item' key={dataItem.id}>
                            
//                             <div className='title'  onClick={ enableMultiSelection ? ()=>handleMultiselect(dataItem.id) :() => handleClick(dataItem.id)}>
//                                 <h3>{dataItem.question}</h3>
//                                 <span>+</span>

//                             </div>
//                             {
//                                 selected===dataItem.id || multiple.indexOf()!==-1 ? 
//                                 <div>{dataItem.answer}</div>:null
                            
//                             }

                        
//                         </div>
//                     ))
//                 ) : (
//                     <div>
//                         <h2>Data is not Found</h2>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Accordian;

