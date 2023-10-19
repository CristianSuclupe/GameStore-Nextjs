"use client";
import { Pagination as PaginationUI } from "semantic-ui-react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import styles from "./pagination.module.scss";

type PaginationProps = {
  currentPage: number;
  totalPage: number;
};
export const Pagination = ({ currentPage, totalPage }: PaginationProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const search = searchParams.get("s");
  const onPageChange = (_: any, data: any) => {
    const { activePage } = data;
    const params = search
      ? `s=${search}&page=${activePage}`
      : `page=${activePage}`;
    router.replace(`${pathname}?${params}`);
  };
  return (
    <div className={styles.container}>
      <PaginationUI
        defaultActivePage={currentPage}
        totalPages={totalPage}
        ellipsisItem={null}
        firstItem={null}
        lastItem={null}
        onPageChange={onPageChange}
      />
    </div>
  );
};
