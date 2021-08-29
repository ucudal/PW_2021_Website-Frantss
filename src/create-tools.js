const toolsContainer = document.getElementById('tools-container');

const tools = [
  {
    section: 'Programing languages',
    items: ['JavaScript', 'TypeScript', 'Python', 'C#', 'Java'],
  },
  {
    section: 'Platforms',
    items: ['Github', 'Spinnaker', 'Jenkins', 'Datadog', 'Docker'],
  },
  {
    section: 'Frameworks and libraries',
    items: ['React', 'Redux', 'Svelte', 'GraphQL', 'REST'],
  },
];

tools.forEach(tool => {
  const container = document.createElement('div');
  const title = document.createElement('h2');
  const list = document.createElement('div');

  container.classList.add('border', 'p-4', 'w-1/4', 'text-center');

  container.appendChild(title);
  container.appendChild(list);

  title.textContent = tool.section;
  title.classList.add('font-bold');

  tool.items.forEach(item => {
    const element = document.createElement('p');
    element.textContent = item;
    element.classList.add('font-thin');

    container.appendChild(element);
  });

  toolsContainer.appendChild(container);
});
