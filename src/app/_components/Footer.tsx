import { LinkIcon } from "@heroicons/react/24/outline";
const Footer = () => {
  return (
    <footer>
      <div className="lg:flex w-full p-6 lg:px-10 mt-24">
        <div className="flex lg:flex-1 items-center justify-center py-5">
          <span className="text-sm text-center">
            © 2020 Your Company, Inc. All rights reserved.
          </span>
        </div>
        <div className="flex lg:flex-1 items-center justify-center space-x-4 py-5">
          <a href="https://github.com/MaaZiJyun">
            <div className="flex">
              <LinkIcon className="h-3 w-3 lg:h-5 lg:w-5 text-black" />
              <span className="text-sm">Github</span>
            </div>
          </a>
          <a href="https://www.youtube.com/channel/UC4O444rk6MfPPbrA1uZonWw">
            <div className="flex">
              <LinkIcon className="h-3 w-3 lg:h-5 lg:w-5 text-black" />
              <span className="text-sm">Youtube</span>
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
