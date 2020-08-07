import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import './styles.css';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningImg from '../../assets/images/icons/warning.svg';
import api from '../../services/api';

export default function TeacherForm() {
  const history = useHistory();

  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');

  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');
  
  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: '' }
  ]);

  function addNewScheduleItem() {
    setScheduleItems([
      ...scheduleItems,
      { week_day: 0, from: '', to: '' }
    ]);
  }

  function handleCreateClass(e: FormEvent) {
    e.preventDefault();

    api.post('classes', {
      name, avatar, whatsapp,
      bio, subject,
      cost: Number(cost),
      schedule: scheduleItems
    }).then(() => {
      alert('Cadastro Realizado com Sucesso!!');

      history.push('/');
    }).catch(() => {
      alert('Erro no cadastro');
    })
  }

  function setScheduleItemValue(position: number, field: string, value: string) {
    const updateScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value }
      }

      return scheduleItem;
    });

    setScheduleItems(updateScheduleItems);
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader 
        title="Que bom que você quer dar aulas." 
        description="O primeiro passo é preencher esse formulário de inscrição."
      />

      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus dados</legend>

            <Input
              name="name"
              label="Nome completo:"
              value={name}
              onChange={({ target }) => { setName(target.value) }}
            />
            <Input
              name="avatar"
              label="Link da sua foto:"
              value={avatar}
              onChange={({ target }) => { setAvatar(target.value) }}
            />
            <Input
              name="whatsapp"
              label="Whatsapp:"
              value={whatsapp}
              onChange={({ target }) => { setWhatsapp(target.value) }}
            />
            <Textarea
              name="bio"
              label="Biografia:"
              value={bio}
              onChange={({ target }) => { setBio(target.value) }}
            />
          </fieldset>
          
          <fieldset>
            <legend>Sobre a Aula</legend>

            <Select 
            name="subject"
            label="Matéria:"
            value={subject}
            onChange={({ target }) => {setSubject(target.value)}}
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Ciencias', label: 'Ciencias' },
              { value: 'Português', label: 'Português' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'História', label: 'História' },
              { value: 'Química', label: 'Química' },
              { value: 'Física', label: 'Física' },
              { value: 'Literatura', label: 'Literatura' },
            ]}
            />
            
            <Input
              name="cost"
              label="Preço hora/aula:"
              value={cost}
              onChange={({ target }) => {setCost(target.value)}}
            />
          </fieldset>

          <fieldset>
            <legend>
              Horários disponíveis
              <button type="button" onClick={addNewScheduleItem}>
                + Novo horário
              </button>
            </legend>

            {scheduleItems.map((scheduleItem, index) => {
              return (
                <div key={scheduleItem.week_day} className="schedule-item">
                  <Select 
                  name="week_day"
                  label="Dia da Semana:"
                  value={scheduleItem.week_day}
                  onChange={({ target }) => setScheduleItemValue(index, 'week_day', target.value)}
                  options={[
                    { value: '0', label: 'Segunda-feira' },
                    { value: '1', label: 'Terça-feira' },
                    { value: '2', label: 'Quarta-feira' },
                    { value: '3', label: 'Quinta-feira' },
                    { value: '4', label: 'Sexta-feira' },
                    { value: '5', label: 'Sábado' },
                    { value: '6', label: 'Domingo' },
                  ]}
                  />

                  <Input
                    type="time"
                    name="from"
                    label="Das:"
                    value={scheduleItem.from}
                    onChange={({ target }) => setScheduleItemValue(index, 'from', target.value)}
                  />
                  <Input
                    type="time"
                    name="to"
                    label="Até:"
                    value={scheduleItem.to}
                    onChange={({ target }) => setScheduleItemValue(index, 'to', target.value)} 
                  />
                </div>
              );
            })}
          </fieldset>

          <footer>
            <p>
              <img src={warningImg} alt="warning"/>
              Importante!<br />
              Preencha todos os dados.
            </p>

            <button type="submit">Salvar cadastro</button>
          </footer>
        </form>
      </main>
    </div>
  )
}
