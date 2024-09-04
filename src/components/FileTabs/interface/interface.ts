interface Tab {
  id: number;
  label: string;
}

export interface FileTabsProps {
  tabs: Tab[];
  initialActiveTabId?: number;
}
