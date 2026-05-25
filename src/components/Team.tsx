import { Ico } from '../icons';

const TEAM = [
  {
    name: 'Krittapop Manupornprapa',
    role: 'Backend Developer',
    github: 'https://github.com/TungDude',
    handle: 'TungDude',
  },
  {
    name: 'Worranittha Hukhan',
    role: 'Frontend Developer & DevOps',
    github: 'https://github.com/mildrrnt',
    handle: 'mildrrnt',
  },
  {
    name: 'Nithiwat Niramitranon',
    role: 'UX/UI Designer',
    github: 'https://github.com/Tniramit',
    handle: 'Tniramit',
  },
];

export function Team() {
  return (
    <section className='wrap pt-16 pb-28' id='team'>
      <div className='flex flex-col gap-8 items-center text-center'>
        <div>
          <div className='section-tag'>The makers</div>
          <h2 className='mt-3.5'>Meet our team.</h2>
        </div>
        <div className='team-grid'>
          {TEAM.map((m) => (
            <a
              key={m.handle}
              href={m.github}
              target='_blank'
              rel='noopener noreferrer'
              className='team-card'
            >
              <div className='team-avatar'>
                <img
                  src={`https://github.com/${m.handle}.png?size=240`}
                  alt={m.name}
                  loading='lazy'
                />
              </div>
              <div className='team-name'>{m.name}</div>
              <div className='team-role'>{m.role}</div>
              <div className='team-handle'>
                <Ico.github s={14} /> @{m.handle}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
