import React, { useContext } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/Components/ui/input";
import { UserInputContext } from "@/app/_context/UserInputContext";

function SelectOption() {
  const { userCourseInput, setUserCourseInput } = useContext(UserInputContext);

  const handleInputChange = (fieldName, value) => {
    setUserCourseInput(prev => ({
      ...prev,
      [fieldName]: value
    }));
  }; 

  return (
    <div className="px-10 md:px-20 lg:px-44">
      <div className="grid grid-cols-2 gap-10">
        <div>
          <label className="text-sm">🎓 Difficulty Level</label>
          <Select 
            onValueChange={(value) => handleInputChange('difficultyLevel', value)} 
            value={userCourseInput?.difficultyLevel} >
            <SelectTrigger className="">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Beginner">Beginner</SelectItem>
              <SelectItem value="Intermediate">Intermediate</SelectItem>
              <SelectItem value="Advanced">Advanced</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="text-sm">⏱️ Course Duration</label>
          <Select 
            onValueChange={(value) => handleInputChange('duration', value)}
            value={userCourseInput?.duration}
          >
            <SelectTrigger className="">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1 hr">1 hr</SelectItem>
              <SelectItem value="2 hr">2 hr</SelectItem>
              <SelectItem value="More than 3 hrs">More than 3 hrs</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <label className="text-sm">▶️ Add Video</label>
          <Select 
            onValueChange={(value) => handleInputChange('displayVideo', value)}
            value={userCourseInput?.displayVideo} 
          >
            <SelectTrigger className="">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Yes">Yes</SelectItem>
              <SelectItem value="No">No</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="text-sm">📖 Number of Chapters</label>
          <Input 
            type="number"
            onChange={(event) => handleInputChange('noOfChapters', event.target.value)}
            value={userCourseInput?.noOfChapters} 
          />
        </div>
      </div>
    </div>
  );
}

export default SelectOption;
