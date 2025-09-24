import { useState } from 'react';
import { useGetSkillsQuery } from '../api/skillsApi';
import styles from './Skills.module.scss';
import { useFilters } from '@/shared/lib/hooks/useFilters';
import SelectionItem from '@/shared/ui/selectionItem';

export const Skills = () => {
   const [showAll, setShowAll] = useState(false);
   const { filters, setFilter } = useFilters();
   const { data, isLoading, error } = useGetSkillsQuery();

   if (isLoading) return <p>Загрузка навыков...</p>;
   if (error) return <p>Произошла ошибка. Попробуйте позже.</p>;
   if (!data || data.length === 0) return <p>Навыки не найдены.</p>;

   const displayedSkills = showAll ? data : data.slice(0, 5);
   const selectedSkill = filters.skills;

   const handleClickSkill = (skillId: string) => {
      const isSelected = selectedSkill === skillId;
      setFilter('skills', isSelected ? null : skillId);
   };

   return (
      <div className={styles['skills']}>
         <p className={styles['skills__title']}>Выберите навык</p>
         <ul className={styles['skills__list']}>
            {displayedSkills.map((skill) => (
               <SelectionItem
                  key={skill.id}
                  text={skill.title}
                  isSelected={selectedSkill === String(skill.id)}
                  onClick={() => handleClickSkill(String(skill.id))}
               />
            ))}
         </ul>
         <button onClick={() => setShowAll(!showAll)} className={styles['skills__show']}>
            {showAll ? 'Скрыть' : 'Посмотреть все'}
         </button>
      </div>
   );
};
