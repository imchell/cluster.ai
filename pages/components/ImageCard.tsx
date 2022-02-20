import { Button, Card, Image, Select, Space, Center, useMantineTheme } from '@mantine/core';
import { useState, useRef, useEffect } from 'react';
import { selectionsAtom, typesAtom } from '../store/data';
import { useAtom } from 'jotai';

export function ImageCard(props: { url: string; index: number }) {
  const [data, setData] = useAtom(selectionsAtom);
  const [types, setTypes] = useAtom(typesAtom);
  const imageRef = useRef() as React.ForwardedRef<HTMLImageElement>;

  useEffect(() => {
    if (imageRef && 'current' in imageRef && imageRef.current) console.log(imageRef.current);
  }, [props.url]);

  const theme = useMantineTheme();

  return (
    <Card radius="md" style={{ backgroundColor: theme.colors.gray[0] }}>
      <Card.Section>
        <Image src={props.url} imageRef={imageRef} height={180} />
      </Card.Section>
      <Space h={'sm'} />
      <Center>
        <Select
          radius="md"
          data={data}
          placeholder="select tag"
          nothingFound="nothing found"
          transition="slide-down"
          transitionDuration={80}
          transitionTimingFunction="spring"
          searchable
          creatable
          getCreateLabel={(query) => `+ Create ${query}`}
          onCreate={(query) => setData((current) => [...current, query])}
          onChange={(value) => {
            let newTypes = types;
            newTypes[props.index] = value as string;
            console.log(newTypes);
            setTypes(newTypes);
          }}
          sx={(theme) => ({
            color: theme.colors.operations[3],
          })}
          styles={{
            dropdown: { color: theme.colors.operations[3] },
            item: { color: theme.colors.operations[3] },
            hovered: { color: theme.colors.operations[3] },
          }}
        />
      </Center>
    </Card>
  );
}
