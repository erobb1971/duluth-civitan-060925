
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { CalendarModal } from "./calendar";
import { useIsMobile } from "@/hooks/use-mobile";
import { getNextEvents } from "@/utils/events";
import { TooltipProvider } from "./ui/tooltip";
import EventsHeader from "./events/EventsHeader";
import MeetingScheduleCard from "./events/MeetingScheduleCard";
import ConventionBanner from "./events/ConventionBanner";
import EventCard from "./events/EventCard";
import { CalendarDays } from "lucide-react";

const EventsSection = () => {
  const [calendarModalOpen, setCalendarModalOpen] = useState(false);
  const isMobile = useIsMobile();
  
  // Get the next 3 upcoming events
  const upcomingEvents = getNextEvents(3);
  
  // Add schema.org Event markup
  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": upcomingEvents.map((event, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Event",
        "name": event.title,
        "startDate": event.startDate,
        "endDate": event.endDate || event.startDate,
        "location": event.location ? {
          "@type": "Place",
          "name": event.location
        } : undefined,
        "description": event.description || ""
      }
    }))
  };

  return (
    <section className="section bg-white dark:bg-gray-900 py-8 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Only render EventsHeader on desktop */}
        <EventsHeader />
        
        {/* Mobile view title */}
        {isMobile && (
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold text-civitan-blue dark:text-civitan-gold">
              Upcoming Events
            </h2>
          </div>
        )}
        
        {/* Flexbox container for meeting schedule and convention banner */}
        <div className="flex flex-col lg:flex-row gap-8 mb-8 sm:mb-12">
          {/* Meeting schedule information */}
          <div className="flex-1 px-2 sm:px-0">
            <MeetingScheduleCard />
          </div>

          {/* Convention banner - Added elevation and spacing to make it stand out */}
          <div className="flex-1 px-2 sm:px-0 flex items-center">
            <ConventionBanner />
          </div>
        </div>

        <TooltipProvider>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 px-2 sm:px-0">
            {upcomingEvents.map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
          </div>
        </TooltipProvider>
        
        {/* View All Events button */}
        <div className="text-center mt-8 sm:mt-12">
          {isMobile ? (
            <Button 
              variant="outline"
              className="border-civitan-blue text-civitan-blue dark:text-white dark:border-white"
              onClick={() => setCalendarModalOpen(true)}
            >
              <CalendarDays className="mr-2 h-4 w-4" />
              View Calendar
            </Button>
          ) : (
            <Button 
              variant="outline" 
              className="border-civitan-blue text-civitan-blue dark:text-white dark:border-white"
              onClick={() => setCalendarModalOpen(true)}
            >
              View All Events
            </Button>
          )}
        </div>
      </div>
      
      <CalendarModal
        open={calendarModalOpen}
        onOpenChange={setCalendarModalOpen}
      />

      {/* Add schema.org Event markup */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />
    </section>
  );
};

export default EventsSection;
