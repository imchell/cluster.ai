import { Button, Card, Image, Select } from '@mantine/core';
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

  return (
    <Card>
      <Card.Section>
        <Image src={props.url} imageRef={imageRef} />
      </Card.Section>
      <Select
        data={data}
        placeholder="Select Type"
        nothingFound="Nothing found"
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
      />
      <Button>Remove</Button>
    </Card>
  );
}
