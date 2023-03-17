import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import useCalendar from "../../store/Calendar";
import { createEventId } from "../../data";

const Calendar = () => {
  const { currentEvents, setCurrentEvent } = useCalendar();

  const handleEvents = async (event) => {
    await Promise.resolve(setCurrentEvent(events));
  };

  const handleDateSelect = (selectInfo) => {
    let title = prompt("Please enter a title for event");
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect();
    // console.log(calendarApi.currentData.eventStore.defs);

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.start,
        end: selectInfo.end,
        allDay: selectInfo.allDay,
      });
    }
  };

  const handleEventClick = (clickInfo) => {
    if (confirm("Are you sure you want to delete this event?")) {
      clickInfo.event.remove();
    }
  };

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
              events={handleEvents}
              select={handleDateSelect}
              eventClick={handleEventClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
