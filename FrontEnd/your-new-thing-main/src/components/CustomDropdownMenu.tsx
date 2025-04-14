// import { FC, useState } from 'react';

// interface SendOptionsDropdownProps {
//   onItemClick: (action: string) => void;
// }

// export const SendOptionsDropdown: FC<SendOptionsDropdownProps> = ({ onItemClick }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsOpen((prevState) => !prevState);
//   };

//   const handleItemClick = (action: string) => {
//     onItemClick(action);
//     setIsOpen(false); // إغلاق الـ Dropdown بعد اختيار العنصر
//   };

//   return (
//     <div className="relative">
//       <button
//         onClick={toggleDropdown}
//         className="px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700"
//       >
//         Select Action
//       </button>
      
//       {isOpen && (
//         <div className="absolute mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg">
//           <button
//             onClick={() => handleItemClick('Send Process')}
//             className="w-full text-left px-4 py-2 hover:bg-gray-100"
//           >
//             Send Process
//           </button>
//           <button
//             onClick={() => handleItemClick('Send Query')}
//             className="w-full text-left px-4 py-2 hover:bg-gray-100"
//           >
//             Send Query
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };


// import { FC, useState } from 'react';

// interface SendOptionsDropdownProps {
//   onItemClick: (action: string) => void;
// }

// export const SendOptionsDropdown: FC<SendOptionsDropdownProps> = ({ onItemClick }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsOpen((prevState) => !prevState);
//   };

//   const handleItemClick = (action: string) => {
//     onItemClick(action);
//     setIsOpen(false); // إغلاق الـ Dropdown بعد اختيار العنصر
//   };

//   return (
//     <div className="relative">
//       <button
//         onClick={toggleDropdown}
//         className="px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700"
//       >
//         Select Action
//       </button>
      
//       {isOpen && (
//         <div className="absolute bottom-full mb-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg">
//           <button
//             onClick={() => handleItemClick('Send Process')}
//             className="w-full text-left px-4 py-2 hover:bg-gray-100"
//           >
//             Send Process
//           </button>
//           <button
//             onClick={() => handleItemClick('Send Query')}
//             className="w-full text-left px-4 py-2 hover:bg-gray-100"
//           >
//             Send Query
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };
// import { FC, useState } from 'react';

// interface SendOptionsDropdownProps {
//   onItemClick: (action: string) => void;
// }

// export const SendOptionsDropdown: FC<SendOptionsDropdownProps> = ({ onItemClick }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsOpen((prevState) => !prevState);
//   };

//   const handleItemClick = (action: string) => {
//     onItemClick(action);
//     setIsOpen(false); // إغلاق الـ Dropdown بعد اختيار العنصر
//   };

//   return (
//     <div className="relative">
//       <button
//         onClick={toggleDropdown}
//         className="px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700"
//       >
//         Select Action
//       </button>
      
//       {isOpen && (
//         <div className="absolute bottom-full mb-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg">
//           <button
//             onClick={() => handleItemClick('Send Process')}
//             className="w-full text-left px-4 py-2 hover:bg-gray-100"
//           >
//             Send Process
//           </button>
//           <button
//             onClick={() => handleItemClick('Send Query')}
//             className="w-full text-left px-4 py-2 hover:bg-gray-100"
//           >
//             Send Query
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };
import { FC, useState, useEffect, useRef } from 'react';

interface SendOptionsDropdownProps {
  onItemClick: (action: string) => void;
}

export const SendOptionsDropdown: FC<SendOptionsDropdownProps> = ({ onItemClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleItemClick = (action: string) => {
    onItemClick(action);
    setIsOpen(false); // Close the dropdown after selecting an item
  };

  const closeDropdown = (e: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Close dropdown when clicking outside of it
    document.addEventListener('mousedown', closeDropdown);
    return () => {
      document.removeEventListener('mousedown', closeDropdown);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700"
        aria-expanded={isOpen ? 'true' : 'false'}
        aria-haspopup="true"
        aria-controls="send-options-dropdown"
      >
        Select Action
      </button>

      {isOpen && (
        <div
          id="send-options-dropdown"
          className="absolute bottom-full mb-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg"
        >
          <button
            onClick={() => handleItemClick('Send Process')}
            className="w-full text-left px-4 py-2 hover:bg-gray-100"
            aria-label="Send Process"
          >
            Send Process
          </button>
          <button
            onClick={() => handleItemClick('Send Query')}
            className="w-full text-left px-4 py-2 hover:bg-gray-100"
            aria-label="Send Query"
          >
            Send Query
          </button>
        </div>
      )}
    </div>
  );
};
