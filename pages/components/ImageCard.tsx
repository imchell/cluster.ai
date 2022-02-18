import { Card, Image, Select } from '@mantine/core';
import { useState } from 'react';
import { selectionsAtom } from '../store/data';
import { useAtom } from 'jotai';

export function ImageCard(props: { url: string }) {
  const [data, setData] = useAtom(selectionsAtom);
  return (
    <Card>
      <Card.Section>
        <Image src={props.url} />
      </Card.Section>
      <Select
        data={data}
        placeholder="Select Type"
        nothingFound="Nothing found"
        searchable
        creatable
        getCreateLabel={(query) => `+ Create ${query}`}
        onCreate={(query) => setData((current) => [...current, query])}
      />
    </Card>
  );
}
