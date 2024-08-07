import { useState } from 'react';
import styles from './App.module.scss';
import { Header } from './components/Header/Header';
import plus from './assets/images/plus.svg';
import { Activity } from './components/activity/Activity';
import { TbClipboardText } from 'react-icons/tb';

function App() {
  const [activities, setActivities] = useState<string[]>([]);
  const [activityName, setActivityName] = useState('');
  const [done, setDone] = useState<string[]>([]);

  const handleNewActivity = (event: any) => {
    event.preventDefault();
    if (activityName === '') {
      return alert('Atividade vazia! \n Atividade não pode ser vazia .');
    }
    if (activities.includes(activityName)) {
      return alert('Atividade já cadastrada \n Está atividade já foi cadastrada.');
    }
    setActivities(prevState => [...prevState, activityName]);
    setActivityName('');
  }

  const handleNewActivityName = (event: any) => {
    setActivityName(event.target.value)
  }

  function handleCheckedChange(name: string) {
    if (done.includes(name)) {
      setDone(done.filter(done => done !== name));
    } else {
      setDone(prevState => [...prevState, name]);
    }
  }

  function handleActivityRemove(name: string) {
    setActivities(activities.filter(activity => activity !== name));
    setDone(done.filter(done => done !== name));
  }

  return (
    <>
      <Header />
      <div className={styles.input}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          onChange={handleNewActivityName}
          value={activityName}
        />
        <button type="submit" onClick={handleNewActivity}>
          Criar
          <img src={plus} />
        </button>
      </div>

      <section className={styles.tasks}>
        <header className={styles.header}>
          <div>
            <p>Tarefas criadas</p>
            <span>{activities.length}</span>
          </div>

          <div>
            <p className={styles.textPurple}>Concluídas</p>
            <span>
              {done.length} de {activities.length}
            </span>
          </div>
        </header>

        <div className={styles.list}>
          {activities.map((activity) => (
            <Activity
              name={activity}
              onRemove={() => handleActivityRemove(activity)}
              onDone={(name: string) => handleCheckedChange(name)}
            />
          ))}

          {activities.length <= 0 && (
            <section className={styles.empty}>
              <TbClipboardText size={50} />
              <div>
                <p>Você ainda não tem tarefas cadastradas</p>
                <span>Crie tarefas e organize seus itens a fazer</span>
              </div>
            </section>
          )}
        </div>
      </section>
    </>
  )
}

export default App