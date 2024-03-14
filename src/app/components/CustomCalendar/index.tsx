// import FullCalendar from '@fullcalendar/react';
// import dayGridPlugin from '@fullcalendar/daygrid';
// import timeGridPlugin from '@fullcalendar/timegrid';
// import interactionPlugin from '@fullcalendar/interaction';
import { Box } from '@mui/material';

// const events = [{ title: 'Meeting', start: new Date() }];

const CustomCalendar: React.FC = () => {
  return (
    <Box>
      {/* <FullCalendar
        editable
        selectable
        headerToolbar={{
          start: "today prev next",
          center: "title",
          end: "dayGridMonth timeGridWeek",
        }}
        nowIndicator
        firstDay={1}
        plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
        initialView="timeGridWeek"
        themeSystem='bootstrap5'
        locale={'ru'}
        events={events}
        dragScroll
        navLinks
        buttonText= {{
          today: 'Сегодня',
          prev: 'Назад',
          next: 'Вперёд',
          week: 'Неделя',
          month: 'Месяц',
        }}
      /> */}
    </Box>
  );
};

export default CustomCalendar;
