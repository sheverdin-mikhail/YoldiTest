import Image from "next/image";
import cls from "./AccountsListPage.module.scss";
import { Text } from "@/shared/ui/Text/Text";
import { Container } from "@/shared/ui/Container/Container";

export const AccountsListPage = () => {
  return (

    <Container className={cls.accountsListPage}>
      <Text title>Список аккаунтов</Text>
    </Container>
  );
}
