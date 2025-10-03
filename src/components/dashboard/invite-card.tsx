import { Button } from "../ul/button";

export default function InviteCard() {
  return (
    <div className="bg-[#f2e9df] rounded-lg p-6 relative overflow-hidden">
      {/* <div className="absolute top-4 right-4">
        <div className="w-16 h-16 bg-primary rounded-full opacity-20"></div>
      </div> */}

      <div className="relative flex flex-col justify-center items-center z-10">
        <div className="w-full flex justify-center">
          <div className="w-12 h-12 bg-primary rounded-full mb-4 flex items-center justify-center">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
              />
            </svg>
          </div>
        </div>

        <h3 className="text-base font-bold text-gray-900 mb-2">
          You've got 0 invites
        </h3>

        {/* <p className="text-sm text-gray-600 mb-4">Use them wisely</p> */}

        <Button variant="outline" className="w-full bg-transparent">
          Invite Friend
        </Button>
      </div>
    </div>
  );
}
