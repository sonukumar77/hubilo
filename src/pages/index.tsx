import Button from "@/components/base/Button";
import SideBar from "@/components/base/SideBar";
import { SPEAKER_LIST } from "@/constants/common.js";
import { useCallback, useState } from "react";
import { debounce } from "@/utils/common";
import Header from "@/components/Header";
import SpeakerCard from "@/components/SpeakerCard";
import Footer from "@/components/Footer";
import { Speaker } from "@/models/speaker";

export default function Home() {
  const [visible, setVisible] = useState<boolean>(false);
  const [searchKey, setSearchKey] = useState<string>("");
  const [speakerList, setSpeakerList] = useState<Speaker[]>(SPEAKER_LIST);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const toggleSideBar = useCallback(() => {
    setVisible((prev) => !prev);
  }, []);

  const onSearchChange = useCallback(
    debounce((value: string) => {
      const filterData = value
        ? speakerList.filter((element) => {
            return element.name.toLowerCase().includes(value.toLowerCase());
          })
        : SPEAKER_LIST;

      setSpeakerList(filterData);
    }, 200),
    [speakerList]
  );

  const handleSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setSearchKey(value);
      onSearchChange(value);
    },
    [onSearchChange]
  );

  const handleSelectItems = (id: string) => {
    setSelectedItems((prev) => {
      if (prev.includes(id)) {
        return prev.filter((itemId) => itemId !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  return (
    <main className={`min-h-screen  p-24`}>
      <p className="mb-4">Add Speaker</p>
      <Button text="Add Speaker" onClick={toggleSideBar} />
      {visible && (
        <SideBar visible={visible}>
          <aside className="sticky">
            {/* SideBar Header */}
            <Header
              onClose={toggleSideBar}
              onSearch={handleSearch}
              searchValue={searchKey}
            />

            {/* Sidebar Middle Content (Speaker List)*/}
            <section className="p-6 w-full flex flex-col gap-4 overflow-y-scroll h-screen pb-[16rem]">
              {speakerList.map((item) => (
                <SpeakerCard
                  key={item.id}
                  {...item}
                  selectedItems={selectedItems}
                  onSelect={handleSelectItems}
                />
              ))}
            </section>

            {/* Sidebar Footer */}
            <Footer selectedItems={selectedItems} />
          </aside>
        </SideBar>
      )}
    </main>
  );
}
