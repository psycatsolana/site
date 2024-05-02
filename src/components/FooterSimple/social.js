import { FaTelegramPlane } from "react-icons/fa";

const { RiTwitterXLine, RiTelegramLine } = require("react-icons/ri");

const navigation = [
    {
      name: 'Telegram',
      href: 'https://www.t.me/PsycatSolana',
      icon: (props) => (
        <FaTelegramPlane className="text-black h-6 w-6" />
      ),
    },
    
    {
      name: 'Twitter',
      href: 'https://twitter.com/PsycatSolana',
      icon: (props) => (
        <RiTwitterXLine className="text-black h-6 w-6" />
      ),
    },
  ]

  const SocialFooterIcons = () => {
    return (
      <>
      <div className="flex flex-row space-x-3">
       {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-white hover:text-gray-200">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-8 w-8 text-black " aria-hidden="true" />
            </a>
        ))}
        </div>
      </>
    )
  }
  
  export default SocialFooterIcons