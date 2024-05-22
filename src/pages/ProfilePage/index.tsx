import React, { useEffect, useState } from 'react';
import { Flex, Spinner } from '@chakra-ui/react';
import styles from './style.module.css';
import classNames from 'classnames/bind';
import PersonalPart from './components/PersonalPart';
import ResumePart from './components/ResumePart';
import ReviewPart from './components/ReviewPart';
import { Employee, Feedback, Skill } from '../../type/dataType';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const style = classNames.bind(styles);

function ProfilePage() {
  const { id } = useParams();

  const [loadedEmployee, setLoadedEmployee] = useState<Employee>({
    id: 0,
    name: 'Empty empty',
    specialization: 'None',
    qualification: 'None',
    stack: ['None'],
    freeTimePerWeek: 0,
    userId: 0,
  });
  const [skills, setSkills] = useState<Skill[]>([]);
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [loadingEmployee, setLoadingEmployee] = useState(true);
  const [loadingSkills, setLoadingSkills] = useState(true);
  const [loadingFeedbacks, setLoadingFeedbacks] = useState(true);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/employees/${id}`,
        );
        setLoadedEmployee(response.data);
      } catch (error) {
        console.error('Ошибка при загрузке информации о сотруднике:', error);
      } finally {
        setLoadingEmployee(false);
      }
    };

    const fetchSkills = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/employee/${id}/skills`,
        );
        setSkills(response.data);
      } catch (error) {
        console.error('Ошибка при загрузке навыков сотрудника:', error);
      } finally {
        setLoadingSkills(false);
      }
    };

    const fetchFeedback = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/feedbacks/${id}`,
        );
        setFeedbacks(response.data);
      } catch (error) {
        console.error('Ошибка при загрузке навыков сотрудника:', error);
      } finally {
        setLoadingFeedbacks(false);
      }
    };

    fetchEmployee();
    fetchSkills();
    fetchFeedback();
  }, [id, feedbacks]);

  const sendFeedback = async (comment: string, reviewerName: string) => {
    try {
      const res = await axios.post('http://localhost:8080/api/feedbacks', {
        rating: 3,
        comment,
        demandEmployeeId: id,
        reviewerName,
      });
      console.log(res);
    } catch (error) {
      console.error('Ошибка при отправке отзыва:', error);
    }
  };

  return (
    <Flex
      direction="column"
      className={style('profile')}
      w="70vw"
      maxW="1000px"
      maxH="760px"
      h="85vh"
      background="white"
      border="20px solid"
      borderColor="gray"
      borderRadius="20px"
      p="3"
    >
      <div className={style('profile__wrapper')}>
        <div className={style('profile__content')}>
          {(loadingEmployee && <Spinner />) || (
            <PersonalPart personalInfo={loadedEmployee} />
          )}
          {(loadingSkills && <Spinner />) || (
            <ResumePart
              description={loadedEmployee?.description ?? ''}
              skills={skills}
            />
          )}
          {(loadingFeedbacks && <Spinner />) || (
            <ReviewPart sendFeedback={sendFeedback} feedbacks={feedbacks} />
          )}
        </div>
      </div>
    </Flex>
  );
}

export default ProfilePage;
