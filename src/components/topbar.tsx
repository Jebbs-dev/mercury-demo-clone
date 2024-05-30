import CustomizeModal from "@/components/customize-modal";

import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";

import { ChevronRight, ExternalLink, Sparkles } from "lucide-react";

import Image from "next/image";

const TopBar = () => {
  return (
    <div className="bg-[#1f1f30] h-14 text-white flex items-center justify-between pl-[44px] pr-[48px] max-h-[106px]">
      <div className="flex space-x-6">
        <div className="flex flex-row items-center space-x-2">
          <span>
            <Image
              src={"/logo_white.png"}
              alt="Logo"
              width={25}
              height={25}
              color="white"
              className="leading-7"
            />
          </span>
          <h3 className="tracking-[3px] text-[16px] leading-7 font-semibold mt-1">
            DEMO
          </h3>
        </div>
        <div className="flex flex-row items-center space-x-3 mt-[2px]">
          <span>Welcome to the Mercury Demo.</span>

          <span>
            <a
              href="https://mercury.com/?utm_source=mercury&utm_medium=demo&_gl=1*1s3n65n*_ga*MTAzNzEzMjY5OC4xNzE1ODgyODg2*_ga_Z1VQ08VXN5*MTcxNTkzMTI3MC42LjEuMTcxNTkzMjA5Ny4wLjAuMA.."
              className="flex text-[15px] underline"
            >
              Learn more about Mercury{" "}
              <span className="ml-2 items-center">
                <ExternalLink size={15} />
              </span>
            </a>
          </span>
        </div>
      </div>
      <div className="flex space-x-3">
        <Dialog>
          <DialogTrigger className="bg-[#565674] hover:bg-[#41415a] h-8 rounded-full font-normal flex items-center p-3">
            Customize Demo
            <span className="ml-2">
              <Sparkles size={13} />
            </span>
          </DialogTrigger>
          <CustomizeModal />
        </Dialog>

        <div className="flex items-center">
          <a href="https://app.mercury.com/signup?utm_source=mercury&utm_medium=demo&utm_campaign=publicDemoOnlyBanner&_gl=1*7ksl6y*_ga*MTAzNzEzMjY5OC4xNzE1ODgyODg2*_ga_Z1VQ08VXN5*MTcxNTkzMTI3MC42LjAuMTcxNTkzMTI3MC4wLjAuMA..">
            <Button className="bg-white hover:bg-[#f2f2f7] text-black h-8 rounded-full tracking-wider font-normal">
              Open Account
              <span className="ml-1">
                <ChevronRight size={17} fontWeight={10} color="black" />
              </span>
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
