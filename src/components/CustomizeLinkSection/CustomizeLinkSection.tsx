import MainHeaderInfo from '../main/MainHeaderInfo/MainHeaderInfo';
import NewLinkButton from '../main/NewLinkButton/NewLinkButton';
import LinkCard from '../main/LinkCard/LinkCard';
import useLinkShare from '@/hooks/useLinkShare/useLinkShare';
import LetsGetYouStarted from '../main/LetsGetYouStarted/LetsGetYouStarted';
import { StrictModeDroppable as Droppable } from '../StrictModeDroppable/StrictModeDroppable';
import { DragDropContext, Draggable } from '@hello-pangea/dnd';

interface Links {
  id: number;
  link: string;
  platform: number;
}

const CustomizeLinkSection = () => {
  const { links, setLinks } = useLinkShare();
  const addLink = () => {
    setLinks((prev: Links[]) => [
      ...prev,
      {
        id: links.length === 0 ? 1 : links[links.length - 1].id + 1,
        link: '',
        platform: 1,
      },
    ]);
  };
  const removeLinkById = (id: number) => {
    setLinks((prev: Links[]) => {
      return prev.filter((item) => item.id !== id);
    });
  };

  const grid = 8;

  const getItemStyle = (isDragging: any, draggableStyle: any) => ({
    userSelect: 'none',
    padding: grid * 0.5,
    borderRadius: '4px',
    background: isDragging ? '#633CFF' : 'rgb(226 232 240)',
    ...draggableStyle,
  });

  const onDragEnd = (result: any) => {
    if (!result.destination) {
      return;
    }
    const items = reorder(links, result.source.index, result.destination.index) as any;
    setLinks(items);
  };
  const reorder = (list: any, startIndex: any, endIndex: any) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  return (
    <div className='p-[16px]'>
      <div className='flex flex-col gap-4 rounded-[8px] bg-white p-[24px]'>
        <MainHeaderInfo
          main_title='Customize your links'
          body_text='Add/edit/remove links below and then share all your profiles with the world!'
        />
        <NewLinkButton addLink={addLink} />
        <DragDropContext onDragEnd={(result) => onDragEnd(result)}>
          <Droppable droppableId='droppable'>
            {(provided, snapshot) => (
              <div className='flex flex-col gap-4' {...provided.droppableProps} ref={provided.innerRef}>
                {links?.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id.toString()} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                      >
                        <LinkCard
                          removeLinkById={removeLinkById}
                          data={item}
                          key={item.id}
                          links={links}
                          setLinks={setLinks}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        {links?.length == 0 && <LetsGetYouStarted />}
      </div>
    </div>
  );
};

export default CustomizeLinkSection;
