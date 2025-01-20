import NavBar from './navbar';
import Card from './card';

export default function Events() {
  return (
    <div>
      <NavBar showIcon={true} />
      <main className="events">
        <Card time={<>Jan 2024<br/>Biting Puppets Workshop</>} 
        url="/residents/yaoer.png" name="YAOER" bio="" />
        <Card time={<>Dec 2024<br/>Winter Food Retreat</>} 
        url="/residents/yoka.png" name="YOKA GONG" bio="Yoka Gong is a visual storyteller, always finding 'new' narratives in everyday life. She transforms, collaborate, and rearrange ordinary objects into unfamiliar and unveiling new forms. She enjoys making connections among the objects and people surrounding herself." />
        <Card
          time={<>Sep 2024<br/>Origami Workshop</>}
          url="/residents/yanran.png"
          name={
            <>
              YANRAN BI <br /> x SUMMER
            </>
          }
          bio="Interdisciplinary artist based in NYC. Her practice is often site-specifc, immersing herself in environments to examine the subtle ambiances of space--sound, light, spirit--and weaving them into imagined propositions. "
        /></main>
    </div>
  );
}
