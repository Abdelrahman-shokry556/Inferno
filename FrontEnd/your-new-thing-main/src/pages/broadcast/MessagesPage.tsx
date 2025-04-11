
// import { FC, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { MainLayout } from '../../layouts/MainLayout';
// import { MessageCard } from '../../components/MessageCard';
// import { LocationCard } from '../../components/LocationCard';
// import { ProgressBar } from '../../components/ProgressBar';
// import { MapPin, MoreHorizontal } from 'lucide-react';
// import { useToast } from '../../hooks/use-toast';

// export const MessagesPage: FC = () => {
//   const [messageText, setMessageText] = useState('');
//   const { toast } = useToast();
//   const navigate = useNavigate();

//   const handleSendMessage = () => {
//     if (!messageText.trim()) {
//       toast({
//         title: "Error",
//         description: "Please enter a message",
//         variant: "destructive"
//       });
//       return;
//     }

//     toast({
//       title: "Success",
//       description: "Message sent successfully!"
//     });

//     setMessageText('');
//   };

//   const handleShareLocation = () => {
//     toast({
//       description: "Location sharing would open here"
//     });
//   };

//   const handleOpenMessageOptions = () => {
//     toast({
//       description: "Message options would open here"
//     });
//   };

//   return (
//     <MainLayout showSidebar title="Broadcast messages">
//       <div className="mb-8">
//         <MessageCard onOptionsClick={handleOpenMessageOptions}>
//           <p>
//             TextTextTextTextTextTextTextTextTextTextTextTextTextText
//             TextTextTextTextTextTextTextTextTextTextTextTextTextText
//             TextTextTextTextTextTextTextTextTextTextTextTextTextText
//             TextTextTextTextTextTextTextTextTextTextTextTextTextText
//             TextTextTextTextTextTextTextTextTextTextTextTextTextText
//             TextTextTextTextTextTextTextTextTextTextTextTextTextText
//           </p>
//         </MessageCard>

//         <LocationCard 
//           coordinates="30.0768163914401931.2847391229373"
//           onOptionsClick={handleOpenMessageOptions}
//         />

//         <ProgressBar 
//           progress={25} 
//           onOptionsClick={handleOpenMessageOptions}
//         />
//       </div>

//       <div className="fixed bottom-4 left-4 right-4 flex">
//         <div className="flex-1 flex mr-2">
//           <input
//             type="text"
//             value={messageText}
//             onChange={(e) => setMessageText(e.target.value)}
//             className="flex-1 p-2 border border-gray-300 rounded-l-md"
//             placeholder="Create"
//           />
//           <button 
//             onClick={handleShareLocation}
//             className="px-3 py-2 border-t border-r border-b border-gray-300"
//           >
//             <MapPin size={20} />
//           </button>
//           <button 
//             className="px-3 py-2 border-t border-r border-b border-gray-300 rounded-r-md"
//           >
//             <MoreHorizontal size={20} />
//           </button>
//         </div>

//         <button 
//           onClick={handleSendMessage}
//           className="px-4 py-2 bg-broadcast-blue text-white rounded-md"
//         >
//           Send Message
//         </button>
//       </div>
//     </MainLayout>
//   );
// };

import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MainLayout } from '../../layouts/MainLayout';
import { MessageCard } from '../../components/MessageCard';
import { LocationCard } from '../../components/LocationCard';
import { ProgressBar } from '../../components/ProgressBar';
import { MapPin, MoreHorizontal } from 'lucide-react';
import { useToast } from '../../hooks/use-toast';

export const MessagesPage: FC = () => {
  const [messageText, setMessageText] = useState('');
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSendMessage = () => {
    if (!messageText.trim()) {
      toast({
        title: "Error",
        description: "Please enter a message",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Success",
      description: "Message sent successfully!"
    });

    setMessageText('');
  };

  const handleShareLocation = () => {
    toast({
      description: "Location sharing would open here"
    });
  };

  const handleOpenMessageOptions = () => {
    toast({
      description: "Message options would open here"
    });
  };

  return (
    <MainLayout showSidebar title="Broadcast messages">
      <div className="mb-8 space-y-6">
        <MessageCard onOptionsClick={handleOpenMessageOptions}>
          <p className="text-sm leading-relaxed">
            {"Text Text Text"}
          </p>
        </MessageCard>

        <LocationCard
          coordinates="30.0768163914401931.2847391229373"
          onOptionsClick={handleOpenMessageOptions}
        />

        <ProgressBar
          progress={25}
          onOptionsClick={handleOpenMessageOptions}
        />
      </div>

      <div className="fixed bottom-4 left-4 right-4 flex justify-end items-center space-x-2">
        {/* الحاوية التي تحتوي على حقل الإدخال والأزرار */}
        <input
          type="text"
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
          className="p-3 border border-gray-300 rounded-l-md w-[1050px]"  // عرض ثابت
          placeholder="Create"
        />
        <button
          onClick={handleShareLocation}
          className="px-3 py-2 border border-gray-300 rounded-md"
        >
          <MapPin size={20} />
        </button>
        <button
          className="px-3 py-2 border border-gray-300 rounded-md"
        >
          <MoreHorizontal size={20} />
        </button>

        {/* زر Send Message */}
        <button
          onClick={handleSendMessage}
          className="px-5 py-3 bg-broadcast-blue text-white rounded-md"
        >
          Send Message
        </button>
      </div>

    </MainLayout>
  );
};
