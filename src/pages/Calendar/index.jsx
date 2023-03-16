import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import useCalendar from "../../store/Calendar";

const Calendar = () => {
  const { currentEvents } = useCalendar();

  return (
    <div className="Calendar py-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <FullCalendar
              plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
              headerToolbar={{
                left: "prev, next, today",
                center: "title",
                right: "dayGridMonth, timeGridWeek, timeGridDay",
              }}
              allDaySlot={false}
              initialView="timeGridWeek"
              slotDuration={"01:00:00"}
              editable={true}
              selectable={true}
              selectMirror={true}
              dayMaxEvents={true}
              weekends={true}
              nowIndicator={true}
              initialEvents={currentEvents}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
