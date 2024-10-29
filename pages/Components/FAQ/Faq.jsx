import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react'; // Import the Plus and Minus icons

const AccordionItem = ({ value, isOpen, onToggle, children, title }) => {
  return (
    <div>
 <div
  className={`flex justify-between items-center p-4 cursor-pointer transition duration-300 bg-white border-b border-gray-400`}
  style={{ borderBottomWidth: '1px' }} // Set border width to 1px
  onClick={() => onToggle(value)}
>


        <span className="text-gray-800">{title}</span>
        <span
          className={`text-lg text-primary transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        >
          {isOpen ? (
            <Minus className="h-5 w-5" />
          ) : (
            <Plus className="h-5 w-5" />
          )}
        </span>
      </div>
      {isOpen && (
        <div className="p-4 bg-gray-100 rounded-md transition-all duration-300 ease-in-out">
          {children}
        </div>
      )}
    </div>
  );
};

const Accordion = ({ children, onOpenChange }) => {
  const [openItem, setOpenItem] = useState(null); // Track a single open item

  const handleToggle = (value) => {
    setOpenItem((prev) => (prev === value ? null : value)); // Open the clicked item or close if it's already open

    if (onOpenChange) {
      onOpenChange(value);
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          isOpen: openItem === child.props.value, // Check if the current child is the open item
          onToggle: handleToggle,
        });
      })}
    </div>
  );
};

const Faq = () => {
  const handleOpenChange = (openItems) => {
    console.log("Current open item:", openItems);
  };

  return (
    <>
    <section id='FAQ'>
<div className='bg-gray-100 border-b-2 border-gray-300'>

<div className='bg-gray-100 mx-5 px-1 md:px-3 lg:px-5 py-8 rounded-md'>
      <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
      <Accordion onOpenChange={handleOpenChange}>
        <AccordionItem value="item-1" title="Is it accessible?">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quia numquam saepe praesentium. Dolore, assumenda nobis commodi optio aspernatur quibusdam.</p>
        </AccordionItem>
        
        <AccordionItem value="item-2" title="Is it secure?">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto labore ea consequuntur nemo, et magnam odio expedita. Reprehenderit, amet saepe?</p>
        </AccordionItem>
        
        <AccordionItem value="item-3" title="Is customer support available?">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa minus quae aspernatur facere fugiat sit maiores saepe inventore minima modi?</p>
        </AccordionItem>
        
        <AccordionItem value="item-4" title="What are the payment options?">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur maxime corrupti magni quisquam asperiores officia et deserunt laborum nesciunt!</p>
        </AccordionItem>
      </Accordion>
    </div>


</div>
</section>
    </>

  );
};

export default Faq;



