
import { useState } from 'react';
import { Share2, Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const SocialShare = () => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  
  const currentUrl = window.location.href;
  const shareText = "Check out SmartTech BW - Botswana's elite automation experts!";

  const shareOptions = [
    {
      name: 'WhatsApp',
      url: `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + currentUrl)}`,
      color: 'bg-green-600 hover:bg-green-500'
    },
    {
      name: 'Twitter',
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(currentUrl)}`,
      color: 'bg-blue-600 hover:bg-blue-500'
    },
    {
      name: 'LinkedIn',
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`,
      color: 'bg-blue-700 hover:bg-blue-600'
    }
  ];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      toast({
        title: "Link copied!",
        description: "Share this link with your network",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Please copy the URL manually",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
      <div className="flex items-center gap-2 mb-4">
        <Share2 className="h-5 w-5 text-purple-400" />
        <h3 className="text-lg font-semibold text-white">Share SmartTech BW</h3>
      </div>
      
      <p className="text-gray-300 mb-6">
        Know a business that needs elite automation? Share our expertise with your network.
      </p>
      
      <div className="flex flex-wrap gap-3 mb-4">
        {shareOptions.map((option) => (
          <Button
            key={option.name}
            onClick={() => window.open(option.url, '_blank')}
            className={`${option.color} text-white text-sm`}
            size="sm"
          >
            {option.name}
          </Button>
        ))}
      </div>
      
      <Button
        onClick={copyToClipboard}
        variant="outline"
        className="w-full text-white border-white/20 hover:bg-white/10"
        size="sm"
      >
        {copied ? (
          <>
            <Check className="h-4 w-4 mr-2 text-green-400" />
            Copied!
          </>
        ) : (
          <>
            <Copy className="h-4 w-4 mr-2" />
            Copy Link
          </>
        )}
      </Button>
    </div>
  );
};

export default SocialShare;
