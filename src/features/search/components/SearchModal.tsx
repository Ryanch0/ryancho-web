'use client'

import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from '@/components/ui/command'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle
} from '@/components/ui/dialog'
import { getColumnFromLocale } from '@/features/posts/utils/getColumnFromLocale'
import useSearchModalUseCase from '@/features/search/hooks/usecases/useSearchModalUseCase'

type Props = {
  isOpen: boolean
  onClose: () => void
}

const SearchModal = ({ isOpen, onClose }: Props) => {
  const { search, posts, loading, onChange, onCloseModal, onSelect, locale } =
    useSearchModalUseCase({ onClose, isOpen })

  const renderResults = () => {
    if (loading) {
      return (
        <div
          className="text-second-light dark:text-second-dark py-12 text-center text-sm"
          role="status"
        >
          Searching...
        </div>
      )
    }

    if (posts.length === 0 && search) {
      return (
        <div className="text-second-light dark:text-second-dark py-12 text-center text-sm">
          No results found
        </div>
      )
    }

    if (posts.length === 0) {
      return (
        <div className="text-second-light dark:text-second-dark py-12 text-center text-sm">
          Start typing to search...
        </div>
      )
    }

    return (
      <CommandGroup className="p-2">
        {posts.map((post) => (
          <CommandItem
            key={post.id}
            className="aria-selected:bg-section-light dark:aria-selected:bg-section-dark flex cursor-pointer flex-col items-start gap-1 rounded-sm px-3 py-3"
            onSelect={() => onSelect(post.slug)}
          >
            <h2 className="text-base-light dark:text-base-dark">
              {getColumnFromLocale(locale, post.title, post.title_kr)}
            </h2>
          </CommandItem>
        ))}
      </CommandGroup>
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={onCloseModal}>
      <DialogContent className="top-[35%] w-[90%] max-w-[640px] gap-0 border-0 p-0 shadow-lg md:top-[50%]">
        <DialogTitle className="sr-only">Search Posts</DialogTitle>
        <DialogDescription className="sr-only">Search Posts</DialogDescription>
        <Command shouldFilter={false} className="min-h-[300px] rounded-lg p-2">
          <CommandInput
            value={search}
            onValueChange={onChange}
            placeholder="Search posts..."
          />
          <CommandList className="max-h-[350px]">{renderResults()}</CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  )
}

export default SearchModal
