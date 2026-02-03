import { LoaderIcon } from "lucide-react";

function PageLoader() {
  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm 
                    flex items-center justify-center">
      <LoaderIcon className="size-10 animate-spin text-white" />
    </div>
  );
}

export default PageLoader;
