import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware'
import data from './resume.json';

interface Section {
  id: string;
  title: string;
  style: string;
  content: any[];
}

interface Store {
  sections: Section[];
  editMode: { [key: string]: boolean };
  setSections: (sections: Section[]) => void;
  toggleEditMode: (sectionId: string) => void;
  handleFieldChange: (sectionId: string, fieldIndex: number, field: string, value: string | any) => void;
    handleSkillChange: (sectionId: string, skillIndex: number, value: string) => void;
    handleExperienceDetailChange: (sectionId: string, experienceIndex: number, detailIndex: number, value: string) => void;
}

const useStore = create<Store>()(
    devtools(
        persist(
            (set) => ({
              sections: data.sections,
              editMode: {},
              setSections: (sections: Section[]) => set({ sections }),
              toggleEditMode: (sectionId: string) =>
                set((state) => ({
                  editMode: {
                    ...state.editMode,
                    [sectionId]: !state.editMode[sectionId],
                  },
                })),
              handleFieldChange: (sectionId, fieldIndex, field, value) =>
                set((state) => ({
                  sections: state.sections.map((section) => {
                    if (section.id === sectionId) {
                      const updatedContent = section.content.map((item, index) => {
                        if (index === fieldIndex) {
                          return { ...item, [field]: value };
                        }
                        return item;
                      });
                      return { ...section, content: updatedContent };
                    }
                    return section;
                  }),
                })),
                handleSkillChange: (sectionId, skillIndex, value) => set((state) => ({
                    sections: state.sections.map(section => {
                        if (section.id === sectionId) {
                            const updatedContent = section.content.map((item, index) => {
                                if (index === skillIndex) {
                                    return value;
                                }
                                return item;
                            });
                            return { ...section, content: updatedContent };
                        }
                        return section;
                    })
                })),
                handleExperienceDetailChange: (sectionId, experienceIndex, detailIndex, value) => set((state) => ({
                    sections: state.sections.map(section => {
                        if (section.id === sectionId) {
                            const updatedContent = section.content.map((exp, index) => {
                                if (index === experienceIndex) {
                                    const updatedDetails = exp.details.map((detail: string, idx: number) => {
                                        if (idx === detailIndex) {
                                            return detail;
                                        }
                                        return detail;
                                    });
                                    return { ...exp, details: updatedDetails };
                                }
                                return exp;
                            });
                            return { ...section, content: updatedContent };
                        }
                        return section;
                    })
                })),
            }),
            {
                name: 'resume-storage',
            }
        )
    )
)

export default useStore; 