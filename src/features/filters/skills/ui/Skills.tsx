import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useGetSkillsQuery } from '../api/skillsApi';
import styles from './Skills.module.scss';
import SelectionItem from '@/shared/ui/selectionItem';

function Skills() {
   const [showAll, setShowAll] = useState<boolean>(false);
   const [searchParams, setSearchParams] = useSearchParams();
   const { data, isLoading, error } = useGetSkillsQuery();

   const displayedSkills = showAll ? data : data?.slice(0, 5);

   function handleSelectSkill(skillId: number) {
      const newParams = new URLSearchParams(searchParams);

      const currentSkill = newParams.get('skills');

      if (currentSkill === String(skillId)) {
         newParams.delete('skills');
      } else {
         newParams.set('skills', String(skillId));
      }
      newParams.set('page', '1');
      setSearchParams(newParams);
   }

   if (isLoading) {
      return <p>Загрузка навыков...</p>;
   }

   if (error) {
      return <p>Произошла ошибка. Попробуйте позже.</p>;
   }

   if (!displayedSkills || displayedSkills.length === 0) {
      return <p>Навыки не найдены.</p>;
   }

   const selectedSkillId = searchParams.get('skills');
   return (
      <div className={styles['skills']}>
         <p className={styles['skills__title']}>Выберите навык</p>
         <ul className={styles['skills__list']}>
            {displayedSkills.map((skill) => (
               <SelectionItem
                  key={skill.id}
                  text={skill.title}
                  isSelected={selectedSkillId === String(skill.id)}
                  onClick={() => handleSelectSkill(skill.id)}
               />
            ))}
         </ul>
         <button onClick={() => setShowAll(!showAll)} className={styles['skills__show']}>
            {showAll ? 'Скрыть' : 'Посмотреть все'}
         </button>
      </div>
   );
}

export default Skills;
