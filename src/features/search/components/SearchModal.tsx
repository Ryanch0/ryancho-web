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
import useSearchModalUseCase from '@/features/search/hooks/usecases/useSearchModalUseCase'

type Props = {
  isOpen: boolean
  onClose: () => void
}

const SearchModal = ({ isOpen, onClose }: Props) => {
  const { search, posts, loading, onChange, onCloseModal, onSelect } =
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
              {post.title}
            </h2>
          </CommandItem>
        ))}
      </CommandGroup>
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={onCloseModal}>
      <DialogContent className="w-[640px] gap-0 border-0 p-0 shadow-lg">
        <DialogTitle className="sr-only">Search Posts</DialogTitle>
        <DialogDescription className="sr-only">Search Posts</DialogDescription>
        <Command
          shouldFilter={false}
          className="h-[350px] rounded-lg p-2 md:h-[450px]"
        >
          <CommandInput
            value={search}
            onValueChange={onChange}
            placeholder="Search posts..."
          />
          <CommandList className="max-h-[400px]">{renderResults()}</CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  )
}

export default SearchModal
