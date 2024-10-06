"use client";
import { Button } from '@/Components/ui/button';
import { HiMiniSquares2X2, HiLightBulb, HiClipboardDocumentCheck } from "react-icons/hi2";
import React, { useEffect, useState, useContext } from 'react'; 
import SelectCategory from './_component/SelectCategory';
import TopicDescription from './_component/TopicDescription';
import SelectOption from './_component/SelectOption';
import { UserInputContext } from '../_context/UserInputContext.jsx'; 
import { GenerateCourseLayout_AI } from '@/configs/AiModel';
import LoadingDialog from './_component/LoadingDialoge';

function CreateCourse() {
    const { userCourseInput, setUserCourseInput } = useContext(UserInputContext);  
    const [loading,setLoading]=useState(false);
    const StepperOptions = [
        { id: 1, name: 'Category', icon: <HiMiniSquares2X2 /> },
        { id: 2, name: 'Topic and Desc', icon: <HiLightBulb /> },
        { id: 3, name: 'Options', icon: <HiClipboardDocumentCheck /> },
    ];
    
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        console.log(userCourseInput);
    }, [userCourseInput]);

    const checkStatus = () => {
        
        if (activeIndex === 0) {
            
            return !userCourseInput?.category; 
        } else if (activeIndex === 1) {
            
            return !userCourseInput?.topic || !userCourseInput?.description; 
        } else if (activeIndex === 2) {
            
            return !userCourseInput?.difficultyLevel || !userCourseInput?.duration; 
        }
        return false; 
    }

    const GenerateCourseLayout = async () => {
        setLoading(true);
        const BASIC_PROMPT = 'Generate a course tutorial on following detail with field as Course Name, Description, along with chapter name, about, duration';
        const USER_INPUT_PROMPT = 'Category:' + userCourseInput?.category + ', Topic:' + userCourseInput?.topic + ', Level:' + userCourseInput?.difficultyLevel + ', Duration:' + userCourseInput?.duration + ', NoOf Chapters:' + userCourseInput?.noOfChapters + ', in JSON format';
        const FINAL_PROMPT = BASIC_PROMPT + USER_INPUT_PROMPT;
    
        console.log('Final Prompt:', FINAL_PROMPT);
        try {
            const result = await GenerateCourseLayout_AI.sendMessage(FINAL_PROMPT);
            let responseText = await result.response?.text(); // Await the response text
            console.log('Response Text:', responseText); // Log the response text
    
            // Clean response text if needed
            responseText = responseText.replace(/```json\n|\n```/g, '').trim();
    
            // Try parsing the JSON
            const parsedData = JSON.parse(responseText); 
            console.log('Parsed Data:', parsedData); // Check the parsed data
        } catch (error) {
            console.error('Error parsing JSON:', error); // Catch and log any errors
        } finally {
            setLoading(false); // Ensure loading is reset
        }
    };
    
    

    return (
        <div>
            <div className='flex flex-col justify-center items-center mt-10'>
                <h2 className='text-4xl text-primary font-medium'>Create Course</h2>
                <div className='flex mt-10'>
                    {StepperOptions.map((item, index) => (
                        <div className='flex items-center' key={item.id}>
                            <div className='flex flex-col items-center w-[50px] md:w-[100px]'>
                                <div className={`bg-gray-400 p-3 rounded-full text-white
                                    ${activeIndex >= index && 'bg-primary'}`}>
                                    {item.icon}
                                </div>
                                <h2 className='hidden md:block md:text-sm'>{item.name}</h2>
                            </div>
                            {index !== StepperOptions.length - 1 && (
                                <div className={`h-1 w-[50px] md:w-[100px] rounded-full lg:w-[170px] bg-gray-300
                                    ${activeIndex - 1 >= index && 'bg-primary'}`}></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className='px-10 md:px-20 lg:px-44 mt-10'>
                {/* Render component based on activeIndex */}
                {activeIndex === 0 && <SelectCategory />}
                {activeIndex === 1 && <TopicDescription />}
                {activeIndex === 2 && <SelectOption />}

                {/* Next and Previous buttons */}
                <div className='flex justify-between mt-10'>
                    <Button 
                        disabled={activeIndex === 0} 
                        variant='outline'
                        onClick={() => setActiveIndex(activeIndex - 1)}>
                        Previous
                    </Button>

                    {activeIndex < 2 && 
                        <Button disabled={checkStatus()} onClick={() => setActiveIndex(activeIndex + 1)}>
                            Next
                        </Button>
                    }
                    
                    {activeIndex === 2 && 
                        <Button onClick={() =>GenerateCourseLayout()}>
                            Generate Course
                        </Button>
                    }
                </div>
            </div>
            <LoadingDialog loading={loading}/>

        </div>
    );
}

export default CreateCourse;
