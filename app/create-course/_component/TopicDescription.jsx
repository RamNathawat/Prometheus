import { Input } from '@/Components/ui/input';
import { Textarea } from '@/Components/ui/textarea';
import React, { useContext } from 'react'; 
import { UserInputContext } from '@/app/_context/UserInputContext';

function TopicDescription() {
  const { userCourseInput, setUserCourseInput } = useContext(UserInputContext);

  const handleInputChange = (fieldName, value) => {
    setUserCourseInput(prev => ({
      ...prev,
      [fieldName]: value
    }));
  };

  return (
    <div className='mx-20 lg:mx-44'>
      {/* Input Topic */}
      <div className='mt-5'>
        <label>💡 Write a topic you want to generate a course about (e.g., Python Course, Yoga)</label>
        <Input 
          placeholder={'Topic'} 
          defaultValue={userCourseInput?.topic}
          onChange={(e) => handleInputChange('topic', e.target.value)} 
        />
      </div>

      {/* Text area description */}
      <div className='mt-5'>
        <label>📝 Tell us more about your course, what you want to include in the course (Optional)</label>
        <Textarea 
          defaultValue={userCourseInput?.description}

          placeholder={'About your course'} 
          onChange={(e) => handleInputChange('description', e.target.value)} 
        />
      </div>
    </div>
  );
}

export default TopicDescription;
