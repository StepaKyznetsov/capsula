import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Box } from '@mui/material';

const events = [{ title: 'Meeting', start: new Date() }];

const CustomCalendar: React.FC = () => {
  return (
    <Box>
      <FullCalendar
        height="100vh"
        editable
        selectable
        nowIndicator
        firstDay={1}
        plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
        themeSystem='bootstrap5'
        initialView="dayGridMonth"
        locale={'ru'}
        events={events}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek'
        }}
      />
    </Box>
  );
};

export default CustomCalendar;
