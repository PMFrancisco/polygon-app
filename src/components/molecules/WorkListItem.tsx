import { Text } from "../atoms/Text";
import { UploaderPic } from "../atoms/UploaderPic";
import { ActionsBar } from "../atoms/ActionsBar";

interface WorkListItemProps {
  formData: {
    author: string;
    pic: string;
    title: string;
    album: string;
    id: string;
    uploader: string;
    uploaderPic: string;
  };
  isFocused: boolean;
  onFocus: () => void;
  onBlur: () => void;
}

export const WorkListItem: React.FC<WorkListItemProps> = ({
  formData,
  isFocused,
  onFocus,
  onBlur,
}) => (
  <li onMouseEnter={onFocus} onMouseLeave={onBlur} className="relative">
    <div className="flex-col justify-center">
      <div className="w-60 rounded-2xl overflow-hidden">
        <img
          src={formData.pic}
          alt={formData.title}
          className="w-full h-48 object-cover"
        />
        <div className="bg-[#211626] p-4">
          <Text as="h3" variant="Highlights" className="line-clamp-1">
            {formData.author}
          </Text>
          <div className="flex items-center gap-2 mt-2 mb-6">
            <UploaderPic uploaderPic={formData.uploaderPic} />
            <Text as="p" variant="SRegular" className="line-clamp-1">
              {formData.uploader}
            </Text>
          </div>
        </div>
      </div>
      {isFocused && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
          <ActionsBar />
        </div>
      )}
    </div>
  </li>
);
