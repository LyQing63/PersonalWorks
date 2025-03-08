'use client'

import useStore from './store';
import ResumeMetadata from './ResumeMetadata';

export default function ResumePage() {
  const { sections, editMode, toggleEditMode, handleFieldChange, handleSkillChange, handleExperienceDetailChange } = useStore();

  return (
    <>
      <ResumeMetadata />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">个人简历</h1>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            导出 PDF
          </button>
        </div>

        <div className="space-y-8">
          {sections.map((section) => (
            <section key={section.id} className={section.style}>
              <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
                  <div>
                      <button
                          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 mr-2"
                          onClick={() => toggleEditMode(section.id)}
                      >
                          {editMode[section.id] ? '保存' : '编辑'}
                      </button>
                  </div>
              </div>
              {/* 根据不同的 section 类型渲染不同的内容 */}
              {section.id === 'personalInfo' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {section.content.map((item: any, index: number) => (
                    <div key={index}>
                      <h3 className="font-medium">{item.label}</h3>
                      {/* 根据编辑模式渲染不同的组件 */}
                      {editMode[section.id] ? (
                        <input
                          type="text"
                          value={item.value}
                          onChange={(e) => handleFieldChange(section.id, index, 'value', e.target.value)}
                          className="border rounded p-1 w-2/3"
                        />
                      ) : (
                        <span>{item.value}</span>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {section.id === 'skills' && (
                <ul className="list-disc list-inside space-y-2">
                  {section.content.map((item: string, index: number) => (
                    <li key={index} >
                      {editMode[section.id] ? (
                        <input
                          type="text"
                          value={item}
                          onChange={(e) => handleSkillChange(section.id, index, e.target.value)}
                          className="border rounded p-1 w-2/3"
                        />
                      ) : (
                        <span>{item}</span>
                      )}
                    </li>
                  ))}
                </ul>
              )}

              {section.id === 'experience' && (
                <div className="space-y-6">
                  {section.content.map((item: any, index: number) => (
                    <div key={index}>
                      <h3 className="text-xl font-medium">{item.title}</h3>
                      <p className="text-gray-600">{item.date}</p>
                      <ul className="list-disc list-inside mt-2">
                        {item.details.map((detail: any, detailIndex: number) => (
                          <li key={detailIndex}>
                              {editMode[section.id] ? (
                                  <input
                                      type="text"
                                      value={detail}
                                      onChange={(e) => handleExperienceDetailChange(section.id, index, detailIndex, e.target.value)}
                                      className="border rounded p-1 w-2/3"
                                  />
                              ) : (
                                  <span>{detail}</span>
                              )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>
      </main>
    </>
  )
} 