import { Text } from "../atoms/Text";
import { UploaderPic } from "../atoms/UploaderPic";

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
}

export const WorkListItem: React.FC<WorkListItemProps> = ({ formData }) => (
  <li>
    <div className="w-60 rounded-2xl overflow-hidden">
      <img src={formData.pic} alt={formData.title} className="w-full h-48 object-cover"/>
      <div className="bg-[#211626] p-4">
        <Text as="h3" variant="Highlights" className="line-clamp-1">
          {formData.author}
        </Text>
        <div className="flex items-center gap-2 my-2">
          <UploaderPic uploaderPic={formData.uploaderPic} />
          <Text as="p" variant="SRegular" className="line-clamp-1">
            {formData.uploader}
          </Text>
        </div>
      </div>
    </div>
  </li>
);
