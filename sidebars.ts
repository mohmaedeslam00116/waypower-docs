import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro',
    'getting-started',
    'pipeline',
    {
      type: 'category',
      label: 'Skills reference',
      link: {
        type: 'generated-index',
        title: 'Skills reference',
        description:
          'All 13 waypower skills — what each one does, when it fires, and what you get.',
      },
      items: [
        'skills/using-waypower',
        'skills/design-interview',
        'skills/tracer-plan',
        'skills/seam-design',
        'skills/seam-driven-tdd',
        'skills/hypothesis-debugging',
        'skills/domain-glossary',
        'skills/completion-gate',
        'skills/dual-axis-review',
        'skills/waymap',
        'skills/finish-handoff',
        'skills/deep-research',
        'skills/authoring-skills',
      ],
    },
  ],
};

export default sidebars;
