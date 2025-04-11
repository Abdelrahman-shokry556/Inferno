
import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthLayout } from '../layouts/AuthLayout';
import { useToast } from '../hooks/use-toast';

export const JoinBroadcastPage: FC = () => {
  const [invitationCode, setInvitationCode] = useState('');
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleJoin = () => {
    if (!invitationCode) {
      toast({
        title: "Error",
        description: "Please enter an invitation code",
        variant: "destructive"
      });
      return;
    }

    // In a real app, we would validate the invitation code
    // For demo purposes, we'll just accept any code
    toast({
      title: "Success",
      description: "Joined broadcast successfully!"
    });

    navigate('/broadcast/messages');
  };

  return (
    <AuthLayout title="Join Broadcast">
      <div className="w-full max-w-md">
        <div className="mb-6">
          <label htmlFor="invitation-code" className="block mb-2">Invitation code</label>
          <input
            id="invitation-code"
            type="text"
            value={invitationCode}
            onChange={(e) => setInvitationCode(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter invitation code"
          />
        </div>
        
        <button 
          onClick={handleJoin}
          className="w-full py-3 px-6 bg-broadcast-blue text-white rounded-md mt-4"
        >
          Join
        </button>
      </div>
    </AuthLayout>
  );
};
