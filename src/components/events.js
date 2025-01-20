import NavBar from './navbar';
import Card from './card';

export default function Events() {
  return (
    <div>
      <NavBar showIcon={true} />
      <main className="events">
        <Card time="Jan 2024" url="/residents/yaoer.png" name="YAOER" bio="Biting Puppets Workshop" />
        <Card time="Dec 2024" url="/residents/yoka.png" name="YOKA GONG" bio="Winter Food Retreat" />
        <Card
          time="Sep 2024"
          url="/residents/yanran.png"
          name={
            <>
              YANRAN BI <br /> x SUMMER
            </>
          }
          bio="Interdisciplinary artist based in NYC. Her practice is often site-specifc, immersing hersolf in environments to examine the subtle ambiances of space--sound, light, spirit--and weaving them into imagined propositions. "
        /></main>
    </div>
  );
}
